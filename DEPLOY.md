# Deploy automático na Hostinger

Este projeto publica automaticamente na Hostinger quando houver `push` na branch `main`.

## Secrets necessários no GitHub

No repositório do GitHub, acesse:

`Settings > Secrets and variables > Actions > New repository secret`

Crie estes secrets:

```text
HOSTINGER_FTP_SERVER
HOSTINGER_FTP_USERNAME
HOSTINGER_FTP_PASSWORD
HOSTINGER_FTP_DIR
```

## Onde encontrar na Hostinger

Na Hostinger, abra o painel do site e procure por **FTP** ou **Contas FTP**.

Use os dados de FTP para preencher:

```text
HOSTINGER_FTP_SERVER   = servidor/host FTP
HOSTINGER_FTP_USERNAME = usuário FTP
HOSTINGER_FTP_PASSWORD = senha FTP
```

O diretório remoto normalmente é:

```text
public_html/
```

Então o secret `HOSTINGER_FTP_DIR` normalmente deve ser:

```text
public_html/
```

Em alguns domínios adicionados, pode ser algo como:

```text
domains/seu-dominio.com/public_html/
```

## Como publicar

Depois dos secrets configurados:

```bash
git add .
git commit -m "Configura deploy automatico na Hostinger"
git push origin main
```

O GitHub vai executar:

```bash
npm ci
npm run build
```

E enviar o conteúdo da pasta `dist/` para a Hostinger.
