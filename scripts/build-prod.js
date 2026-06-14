import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

const __dirname = path.resolve();

const devTemplate = path.join(__dirname, 'index.dev.html');
const rootHtml = path.join(__dirname, 'index.html');
const distDir = path.join(__dirname, 'dist');
const distHtml = path.join(distDir, 'index.html');
const distAssets = path.join(distDir, 'assets');
const rootAssets = path.join(__dirname, 'assets');

function copyFolderRecursive(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }
  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyFolderRecursive(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

try {
  console.log('🚀 Iniciando preparação para build de produção...');

  // 1. Garantir que o index.html da raiz é o de desenvolvimento para o Vite compilar corretamente
  console.log('👉 Preparando index.html para compilação...');
  fs.copyFileSync(devTemplate, rootHtml);

  // 2. Rodar o Vite Build
  console.log('📦 Executando vite build...');
  execSync('npx vite build', { stdio: 'inherit' });
  console.log('✅ Compilação finalizada!');

  // 3. Copiar o index.html gerado na dist para a raiz
  console.log('📄 Copiando index.html compilado para a raiz...');
  if (fs.existsSync(distHtml)) {
    fs.copyFileSync(distHtml, rootHtml);
  } else {
    throw new Error('index.html não foi encontrado na pasta dist.');
  }

  // 4. Garantir que a pasta assets da raiz existe
  if (!fs.existsSync(rootAssets)) {
    fs.mkdirSync(rootAssets, { recursive: true });
  }

  // 5. Copiar novos assets da dist para a raiz
  console.log('📂 Copiando novos assets de produção para a raiz...');
  if (fs.existsSync(distAssets)) {
    copyFolderRecursive(distAssets, rootAssets);
  }

  // 6. Limpar arquivos antigos e não utilizados do assets da raiz
  console.log('🧹 Removendo assets obsoletos...');
  const htmlContent = fs.readFileSync(rootHtml, 'utf8');
  const assetsInRoot = fs.readdirSync(rootAssets);
  assetsInRoot.forEach(file => {
    // Se o arquivo não estiver referenciado no index.html, remove
    if (!htmlContent.includes(file)) {
      try {
        fs.unlinkSync(path.join(rootAssets, file));
        console.log(`🗑️ Removido asset antigo: ${file}`);
      } catch (err) {
        console.warn(`⚠️ Não foi possível remover ${file}:`, err.message);
      }
    }
  });

  // 7. Tentar limpar pasta dist para manter o repositório organizado
  console.log('🗑️ Removendo pasta dist temporária...');
  try {
    fs.rmSync(distDir, { recursive: true, force: true });
  } catch (err) {
    console.warn('⚠️ Não foi possível remover a pasta dist temporária (provavelmente bloqueada por outro processo).');
  }

  console.log('\n🎉 Build de produção finalizado e pronto para Hostinger!');
} catch (error) {
  console.error('\n❌ Erro durante o processo de build de produção:', error.message);
  process.exit(1);
}
