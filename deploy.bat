@echo off
echo ========================================
echo    HUELLA COOKIES - DEPLOY SCRIPT
echo ========================================
echo.

echo [1/4] Instalando dependencias...
call npm install

echo.
echo [2/4] Verificando arquivos...
if not exist "server.js" (
    echo ERRO: server.js nao encontrado!
    pause
    exit /b 1
)

echo.
echo [3/4] Iniciando servidor...
echo.
echo ========================================
echo   SERVIDOR INICIADO COM SUCESSO!
echo ========================================
echo.
echo Acesse: http://localhost:3000
echo.
echo Pressione Ctrl+C para parar o servidor
echo ========================================
echo.

call npm start

pause
