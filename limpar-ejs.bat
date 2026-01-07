@echo off
echo Limpando ficheiros EJS desnecessarios...
echo.

if exist views (
    if not exist backup mkdir backup
    move views backup\views_backup
    echo [OK] Pasta views movida para backup\views_backup
) else (
    echo [INFO] Pasta views nao encontrada
)

if exist routes (
    if not exist backup mkdir backup
    move routes backup\routes_backup
    echo [OK] Pasta routes movida para backup\routes_backup
) else (
    echo [INFO] Pasta routes nao encontrada
)

echo.
echo Limpeza concluida!
echo As pastas foram movidas para a pasta 'backup' caso precise delas no futuro.
pause

