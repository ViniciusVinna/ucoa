# uCOA - uCondo Chart of accounts
Um aplicativo em React Native que permita realizar o cadastro de um plano de contas

## Introdução
O plano de contas para condomínios tem como objetivo principal fornecer uma estrutura organizada e padronizada para o registro e categorização das transações financeiras associadas à gestão do condomínio. Ele estabelece uma lista de contas contábeis para registrar todas as receitas e despesas, garantindo uma contabilidade precisa e consistente ao longo do tempo.

- [Saiba mais](https://www.ucondo.com.br/blog plano-de-contas-para-condominio-tudo-o-que-voce-precisa-saber)


## Requisitos Funcionais:

- [ ] O aplicativo deve permitir o cadastro de um plano de contas.
- [ ] O aplicativo deve permitir a inclusão e exclusão de registros
- [ ] Os registros devem ser salvos no próprio dispositivo.
- [ ] O aplicativo deve permitir a seleção do **pai** de uma conta.
- [ ] O aplicativo deve buscar o `maior` **filho** da conta selecionada.
- [ ] O aplicativo deve somar `+1` no final do maior filho e sugerir o código.

## Requisitos Não Funcionais:

- [ ] O aplicativo deve ser desenvolvido em React Native.
- [ ] O aplicativo deve ser compatível com dispositivos móveis.
- [ ] O aplicativo deve ser fácil de usar e intuitivo.
- [ ] O aplicativo deve ser seguro e proteger os dados do usuário.
- [ ] O aplicativo deve ser testado e validado antes da entrega.
- [ ] O aplicativo deve ser entregue dentro do prazo estabelecido.

## Requisitos Não Funcionais:

<details>
    <summary>Plano de contas: Tabela de exemplo</summary>

| Código | Nome da conta | Tipo | Aceita Lançamentos |
|--------|---------------|------|--------------------|
| 1 | Receitas | Receita | Não |
| 1.1 | Taxa condominial | Receita | Sim |
| 1.2 | Reserva de dependência | Receita | Sim |
| 1.3 | Multas | Receita | Sim |
| 1.4 | Juros | Receita | Sim |
| 1.5 | Multa condominial | Receita | Sim |
| 1.6 | Água | Receita | Sim |
| 1.7 | Gás | Receita | Sim |
| 1.8 | Luz e energia | Receita | Sim |
| 1.9 | Fundo de reserva | Receita | Sim |
| 1.10 | Fundo de obras | Receita | Sim |
| 1.11 | Correção monetária | Receita | Sim |
| 1.12 | Transferência entre contas | Receita | Sim |
| 1.13 | Pagamento duplicado | Receita | Sim |
| 1.14 | Cobrança | Receita | Sim |
| 1.15 | Crédito | Receita | Sim |
| 1.16 | Água mineral | Receita | Sim |
| 1.17 | Estorno taxa de resgate | Receita | Sim |
| 1.18 | Acordo | Receita | Sim |
| 1.19 | Honorários | Receita | Sim |
| 2 | Despesas | Despesa | Não |
| 2.1 | Com pessoal | Despesa | Não |
| 2.1.1 | Salário | Despesa | Sim |
| 2.1.2 | Adiantamento salarial | Despesa | Sim |
| 2.1.3 | Hora extra | Despesa | Sim |
| 2.1.4 | Férias | Despesa | Sim |
| 2.1.5 | 13º salário | Despesa | Sim |
| 2.1.6 | Adiantamento 13º salário | Despesa | Sim |
| 2.1.7 | Adicional de função | Despesa | Sim |
| 2.1.8 | Aviso prévio | Despesa | Sim |
| 2.1.9 | INSS | Despesa | Sim |
| 2.1.10 | FGTS | Despesa | Sim |
| 2.1.11 | PIS | Despesa | Sim |
| 2.1.12 | Vale refeição | Despesa | Sim |
| 2.1.13 | Vale transporte | Despesa | Sim |
| 2.1.14 | Cesta básica | Despesa | Sim |
| 2.1.15 | Acordo trabalhista | Despesa | Sim |
| 2.2 | Mensais | Despesa | Não |
| 2.2.1 | Energia elétrica | Despesa | Sim |
| 2.2.2 | Água e esgoto | Despesa | Sim |
| 2.2.3 | Taxa de administração | Despesa | Sim |
| 2.2.4 | Gás | Despesa | Sim |
| 2.2.5 | Seguro obrigatório | Despesa | Sim |
| 2.2.6 | Telefone | Despesa | Sim |
| 2.2.7 | Softwares e aplicativos | Despesa | Sim |
| 2.3 | Manutenção | Despesa | Não |
| 2.3.1 | Elevador | Despesa | Sim |
| 2.3.2 | Limpeza e conservação | Despesa | Sim |
| 2.3.3 | Jardinagem | Despesa | Sim |
| 2.4 | Diversas | Despesa | Não |
| 2.4.1 | Honorários de advogado | Despesa | Sim |
| 2.4.2 | Xerox | Despesa | Sim |
| 2.4.3 | Correios | Despesa | Sim |
| 2.4.4 | Despesas judiciais | Despesa | Sim |
| 2.4.5 | Multas | Despesa | Sim |
| 2.4.6 | Juros | Despesa | Sim |
| 2.4.7 | Transferência entre contas | Despesa | Sim |
| 3 | Despesas bancárias | Despesa | Não |
| 3.1 | Registro de boletos | Despesa | Sim |
| 3.2 | Processamento de boletos | Despesa | Sim |
| 3.3 | Registro e processamento de boletos | Despesa | Sim |
| 3.4 | Resgates | Despesa | Sim |
| 4 | Outras receitas | Receita | Não |
| 4.1 | Rendimento de poupança | Receita | Sim |
| 4.2 | Rendimento de investimentos | Receita | Sim |

</details>
