const fs = require("fs");
const http = require("http");
const next = require("next");
const path = require("path");
const { parse } = require("url");

const appRoot = __dirname;
const nextPackage = path.join(appRoot, "node_modules", "next", "package.json");
const nextBuildDir = path.join(appRoot, ".next");
const startupLogPath = path.join(appRoot, "startup.log");

function writeStartupLog(message, error) {
  const lines = [`[${new Date().toISOString()}] ${message}`];

  if (error) {
    lines.push(error.stack || String(error));
  }

  fs.appendFileSync(startupLogPath, `${lines.join("\n")}\n`);
}

process.on("uncaughtException", (error) => {
  writeStartupLog("uncaughtException", error);
  process.exit(1);
});

process.on("unhandledRejection", (reason) => {
  writeStartupLog("unhandledRejection", reason);
  process.exit(1);
});

if (!fs.existsSync(nextPackage)) {
  writeStartupLog("No se encontro Next.js en node_modules. Ejecuta: npm ci");
  console.error(
    "[startup] No se encontro Next.js en node_modules. Ejecuta: npm ci",
  );
  process.exit(1);
}

if (!fs.existsSync(nextBuildDir)) {
  writeStartupLog("No se encontro la carpeta .next. Ejecuta: npm run build");
  console.error(
    "[startup] No se encontro la carpeta .next. Ejecuta: npm run build",
  );
  process.exit(1);
}

const port = Number.parseInt(process.env.PORT || "3000", 10);
const host = "0.0.0.0";

process.chdir(appRoot);

writeStartupLog(`Intentando iniciar Next en ${appRoot} con PORT=${port}`);

const app = next({
  dev: false,
  dir: appRoot,
  hostname: host,
  port,
});

const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    http
      .createServer((req, res) => {
        const parsedUrl = parse(req.url || "/", true);
        handle(req, res, parsedUrl);
      })
      .listen(port, host, () => {
        writeStartupLog(`Next escuchando en ${host}:${port}`);
        console.log(`[startup] Next escuchando en ${host}:${port}`);
      });
  })
  .catch((error) => {
    writeStartupLog("Error iniciando Next", error);
    console.error("[startup] Error iniciando Next:", error);
    process.exit(1);
  });
