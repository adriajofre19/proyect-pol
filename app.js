const { spawn } = require("child_process");
const fs = require("fs");
const path = require("path");

const appRoot = __dirname;
const nextBin = path.join(
  appRoot,
  "node_modules",
  "next",
  "dist",
  "bin",
  "next",
);
const nextBuildDir = path.join(appRoot, ".next");

if (!fs.existsSync(nextBin)) {
  console.error(
    "[startup] No se encontro Next.js en node_modules. Ejecuta: npm ci",
  );
  process.exit(1);
}

if (!fs.existsSync(nextBuildDir)) {
  console.error(
    "[startup] No se encontro la carpeta .next. Ejecuta: npm run build",
  );
  process.exit(1);
}

const port = process.env.PORT || "3000";

process.chdir(appRoot);

const child = spawn(process.execPath, [nextBin, "start", "-p", String(port)], {
  stdio: "inherit",
  cwd: appRoot,
  env: process.env,
});

for (const signal of ["SIGINT", "SIGTERM"]) {
  process.on(signal, () => {
    child.kill(signal);
  });
}

child.on("exit", (code) => {
  process.exit(code ?? 0);
});
