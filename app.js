const { spawn } = require("child_process");

const port = process.env.PORT || "3000";

const child = spawn(
  process.execPath,
  ["./node_modules/next/dist/bin/next", "start", "-p", String(port)],
  {
    stdio: "inherit",
    env: process.env,
  },
);

for (const signal of ["SIGINT", "SIGTERM"]) {
  process.on(signal, () => {
    child.kill(signal);
  });
}

child.on("exit", (code) => {
  process.exit(code ?? 0);
});
