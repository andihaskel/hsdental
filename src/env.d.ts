/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_CONSULTATION_ENDPOINT?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
