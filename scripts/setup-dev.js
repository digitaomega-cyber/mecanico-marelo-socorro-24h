import fs from 'fs';
import path from 'path';

const __dirname = path.resolve();
const devTemplate = path.join(__dirname, 'index.dev.html');
const rootHtml = path.join(__dirname, 'index.html');

try {
  console.log('🔧 Configurando o ambiente para desenvolvimento local...');
  fs.copyFileSync(devTemplate, rootHtml);
  console.log('✅ index.html de desenvolvimento restaurado com sucesso!');
} catch (error) {
  console.error('❌ Erro ao configurar index.html de desenvolvimento:', error);
  process.exit(1);
}
