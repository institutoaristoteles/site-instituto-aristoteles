# site-instituto-aristoteles

## Sobre

O Instituto Aristóteles é uma organização sem fins lucrativos que, através de campanhas, eventos e workshops, busca aumentar a conscientização sobre saúde mental e apoiar jovens em regiões periféricas, criando campanhas de conscientização e desenvolvendo projetos em locais públicos. A missão do projeto é ajudar cada vez mais jovens que estão sendo esquecidos pelo governo e sociedade, propondo ações em diversos setores para que o tema seja discutido e tratado com seriedade.

## Rodando o projeto

> Antes de mais nada, se certifique que tenha o Node.js instalado na sua máquina. 
> Você pode verificar isso, rodando `node --version` no terminal. Caso retorne algo parecido com: `v18.16.0`, tudo certo.
> Se em vez disso, algum erro for retornado, você provavelmente não possui o Node.js instalado.

1. Clone o projeto:
    ```bash
    git clone git@github.com:instituto-aristoteles/site-instituto-aristoteles.git
    ```

2. Instale as dependências:
   ```bash
   cd site-instituto-aristoteles
   npm install
   ```
3. Rode a aplicação localmente, utilizando:
    ```bash
    npm run dev
    ```
   
    > Agora você pode acessar o site rodando localmente através do endereço: http://localhost:3000.


## Configurando o ESLint no VSCode

ESLint é uma ferramenta para automatizar o padrão de código adotado para a aplicação. Ele aponta que estão fora do padrão, como ponto e virgula desnecessários, excesso de espaços em branco, variáveis não utilizadas e etc.

Para que o VSCode avise quando o código não estiver de acordo com as regras do ESLint, você pode instalar uma extensão no VSCode chamada ESLint:
https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint

Para que alguns desses avisos sejam corrigidos automaticamente ao salvar o arquivo, vá em Files > Preferences > Settings. Utilizando o modo de configuração em JSON (que pode ser alterado na barra superior direita do VSCode), adicione esta configuração:

```json
{
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true,
        "source.organizeImports": true
    }
}
```
