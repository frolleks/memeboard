import Minio from "minio";
import { env } from "@/env.mjs";

export const minioClient = new Minio.Client({
  endPoint: env.MINIO_ENDPOINT,
  port: 9000,
  accessKey: env.MINIO_ROOT_USERNAME,
  secretKey: env.MINIO_ROOT_PASSWORD,
});
