# Coffee Delivery
  Aplicação de site de café básico com escolha de produtos, compra, cadastramento e mensagem de sucesso.

## Configuração
  Para configurar essa aplicação, foi alterado o `.eslintrc.json` para o da rocketseat. Utilizado o Vite para criação do ambiente de desenvolvimento e usado algumas bibliotecas a mais para melhorar a aplicabilidade de alguns recursos.

  ### React Router Dom
    O React Router Dom foi utilizado para criar as rotas para as páginas da aplicação e configurar um layout para as páginas, integrando consigo um componente Header de toda a aplicação.

  ### Styled Components
    Essa biblioteca de estilizações foi utilizada em toda a aplicação por suas características de componente.

  ### Json Server
    Essa biblioteca permite a criação de API com dados que simulam o uso de um banco de dados, será daqui onde iremos receber os dados dos cafés presentes no menu.

  ### Axios
    Por fim uma biblioteca de comunicação com APIs para podermos acessar os valores dos cafés do nosso menu de itens.

## Páginas da Aplicação
  Aqui vamos compreender como cada página se comporta
  
  ### Página Home: Página principal
    Nesta página, nos nos deparamos com a apresentação da aplicação, como ela é, como ela se comunica e como ela funciona. Logo abaixo da logo e da frase de apresentação do site, temos o menu já por padrão com todos os cafés e os filtros dispensáveis para seus clientes e usuários.