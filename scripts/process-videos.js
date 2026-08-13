/* eslint-disable @typescript-eslint/no-require-imports */

const fs = require("fs");
const path = require("path");
const { spawn } = require("child_process");
const ffmpegPath = require("@ffmpeg-installer/ffmpeg").path;

const projectRoot = process.cwd();
const sourceDirectory = path.join(
  projectRoot,
  "FUEGO DE PATIO - TODO EL MATERIAL GRAFICO",
  "FUEGO DE PATIO",
);
const outputDirectory = path.join(projectRoot, "public", "media", "video");

const videos = [
  { source: "20260103_151951.mp4", output: "cordero-fuego-vivo.mp4", poster: "cordero-fuego-vivo.jpg" },
  { source: "20260214_183755.mp4", output: "fuego-atardecer.mp4", poster: "fuego-atardecer.jpg" },
  { source: "20260307_193723.mp4", output: "fogones-noche.mp4", poster: "fogones-noche.jpg" },
  { source: "20260501_122203.mp4", output: "asador-accion.mp4", poster: "asador-accion.jpg" },
  { source: "20260501_142734.mp4", output: "parrilla-detalle.mp4", poster: "parrilla-detalle.jpg" },
  { source: "20260711_193111.mp4", output: "barra-nocturna.mp4", poster: "barra-nocturna.jpg" },
];

function runFfmpeg(args) {
  return new Promise((resolve, reject) => {
    const child = spawn(ffmpegPath, args, { stdio: "inherit" });
    child.on("error", reject);
    child.on("close", (code) => {
      if (code === 0) resolve();
      else reject(new Error(`ffmpeg terminó con código ${code}`));
    });
  });
}

async function main() {
  fs.mkdirSync(outputDirectory, { recursive: true });

  for (const video of videos) {
    const sourcePath = path.join(sourceDirectory, video.source);
    const outputPath = path.join(outputDirectory, video.output);
    const posterPath = path.join(outputDirectory, video.poster);

    if (!fs.existsSync(sourcePath)) {
      throw new Error(`No se encontró el video de origen: ${sourcePath}`);
    }

    const outputReady = fs.existsSync(outputPath) && fs.statSync(outputPath).size > 500_000;
    const posterReady = fs.existsSync(posterPath) && fs.statSync(posterPath).size > 10_000;

    if (!outputReady) {
      console.log(`Procesando ${video.source}`);
      await runFfmpeg([
        "-y",
        "-i", sourcePath,
        "-map", "0:v:0",
        "-map", "0:a?",
        "-vf", "scale=960:-2:force_original_aspect_ratio=decrease,fps=30",
        "-c:v", "libx264",
        "-preset", "faster",
        "-crf", "26",
        "-pix_fmt", "yuv420p",
        "-c:a", "aac",
        "-b:a", "96k",
        "-movflags", "+faststart",
        outputPath,
      ]);
    }

    if (!posterReady) {
      await runFfmpeg([
        "-y",
        "-ss", "1.5",
        "-i", sourcePath,
        "-frames:v", "1",
        "-vf", "scale=720:-2:force_original_aspect_ratio=decrease",
        "-q:v", "3",
        posterPath,
      ]);
    }
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
