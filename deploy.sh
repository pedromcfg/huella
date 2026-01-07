#!/bin/bash

echo "========================================"
echo "    HUELLA COOKIES - DEPLOY SCRIPT"
echo "========================================"
echo

echo "[1/4] Instalando dependências..."
npm install

echo
echo "[2/4] Verificando arquivos..."
if [ ! -f "server.js" ]; then
    echo "ERRO: server.js não encontrado!"
    exit 1
fi

echo
echo "[3/4] Iniciando servidor..."
echo
echo "========================================"
echo "   SERVIDOR INICIADO COM SUCESSO!"
echo "========================================"
echo
echo "Acesse: http://localhost:3000"
echo
echo "Pressione Ctrl+C para parar o servidor"
echo "========================================"
echo

npm start
