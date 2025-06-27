@echo off
setlocal

set "outputFile=Nomes_dos_Arquivos.txt"

echo Listando arquivos na pasta atual e excluindo os especificados...

REM List files, exclude directories, and then filter out unwanted files
dir /b /a-d | findstr /v /i "listar_arquivos.bat Nomes_dos_Arquivos.txt NOTA.txt TEXTO_HTML_IA.txt" > "%outputFile%"

echo.
echo Nomes dos arquivos (excluindo os especificados) salvos em "%outputFile%".
pause