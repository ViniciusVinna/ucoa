# uCOA - uCondo Chart of accounts
Um aplicativo em React Native que permita realizar o cadastro de um plano de contas

## Sumário
1. [📖 Introdução](#introdução)
2. [📝 Requisitos Funcionais](#requisitos-funcionais)
3. [🔧 Requisitos Não Funcionais](#requisitos-não-funcionais)
4. [📚 Regras Negociais](#regras-negociais)
   - [🧪 Regras Negociais (BDD - Behavior-driven development)](#regras-negociais-bdd)
   - [🎬 Cenários](#cenários)
5. [🏗️ Design de Solução (DDD - Domain Driven Design)](#design-de-solução)

## 📖 Introdução
O plano de contas para condomínios tem como objetivo principal fornecer uma estrutura organizada e padronizada para o registro e categorização das transações financeiras associadas à gestão do condomínio. Ele estabelece uma lista de contas contábeis para registrar todas as receitas e despesas, garantindo uma contabilidade precisa e consistente ao longo do tempo.

- [Saiba mais](https://www.ucondo.com.br/blog plano-de-contas-para-condominio-tudo-o-que-voce-precisa-saber)


## 📝 Requisitos Funcionais:

- [ ] O aplicativo deve permitir o cadastro de um plano de contas.
- [ ] O aplicativo deve permitir a inclusão e exclusão de registros
- [ ] Os registros devem ser salvos no próprio dispositivo.
- [ ] O aplicativo deve permitir a seleção do **pai** de uma conta.
- [ ] O aplicativo deve buscar o `maior` **filho** da conta selecionada.
- [ ] O aplicativo deve somar `+1` no final do maior filho e sugerir o código.

## 🔧 Requisitos Não Funcionais:

- [x] O aplicativo deve ser desenvolvido em React Native.
- [x] O aplicativo deve ser compatível com dispositivos móveis.
- [x] O aplicativo deve ser fácil de usar e intuitivo.
- [ ] O aplicativo deve ser seguro e proteger os dados do usuário.
- [ ] O aplicativo deve ser testado e validado antes da entrega.
- [ ] O aplicativo deve ser entregue dentro do prazo estabelecido.

## 📚 Regras Negociais

<details>
    <summary>Plano de contas: Tabela de referência</summary>

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

---

- [ ] A tela de cadastro deve permitir _selecionar_ a **conta pai** - e ao fazer isso você deve automaticamente sugerir o código da filha que será cadastrada (Ex.: Criando uma conta filha de `2.2` você irá sugerir o código `2.2.8` se a maior filha for a `2.2.7`. Sempre use a lógica do maior + 1)
- [ ] O código deverá ser sugerido a pessoa usuária mas ela pode atualizar conforme sua necessidade
- [ ] A conta que aceita lançamentos **não** pode ter filhas
- [ ] A conta que não aceita lançamento **pode** ser pai de outras contas
- [ ] Os códigos **não** podem se repetir
- [ ] As contas devem, **obrigatoriamente**, ser do mesmo tipo que seu pai quando este for informado
- [ ] O maior código possível é `999` independente do nível que você está. Então o código `9.9.999` é um código válido ao contrário de `9.9.1000`
- [ ] Se você já possui o código `9.9.999` e precisa criar mais uma filha da conta `9.9` você deverá: alterar o pai informado para `9` e sugerir o próximo código válido

___

#### 🧪 Regras Negociais (BDD - Behavior-driven development)
> - **📌 Dado** que a tela de cadastro permite selecionar a conta pai
> - **🕒 Quando** o usuário seleciona a conta pai
> - **✔️ Então** o sistema deve sugerir automaticamente o código da filha que será cadastrada, seguindo a lógica do maior + 1

> - **📌 Dado** que o código é sugerido ao usuário
> - **🕒 Quando** o usuário deseja atualizar o código
> - **✔️ Então** o sistema deve permitir que o usuário atualize o código conforme sua necessidade

> - **📌 Dado** que uma conta aceita lançamentos
> - **🕒 Quando** o usuário tenta adicionar filhas a essa conta
> - **✔️ Então** o sistema não deve permitir

> - **📌 Dado** que uma conta não aceita lançamentos
> - **🕒 Quando** o usuário tenta fazer essa conta ser pai de outras contas
> - **✔️ Então** o sistema deve permitir

> - **📌 Dado** que o usuário está cadastrando uma conta
> - **🕒 Quando** o usuário tenta usar um código que já existe
> - **✔️ Então** o sistema não deve permitir

> - **📌 Dado** que o usuário está cadastrando uma conta filha
> - **🕒 Quando** o usuário informa o tipo da conta
> - **✔️ Então** o tipo da conta filha deve ser o mesmo que o tipo da conta pai

> - **📌 Dado** que o usuário está cadastrando uma conta
> - **🕒 Quando** o usuário tenta usar um código maior que 999
> - **✔️ Então** o sistema não deve permitir

> - **📌 Dado** que o usuário está cadastrando uma conta filha e o pai já tem um filho com código 999
> - **🕒 Quando** o usuário seleciona o pai
> - **✔️ Então** o sistema deve alterar o pai informado para o nível anterior e sugerir o próximo código válido

#### 🎬 Cenários
> **Cenário 1**:
> - **📌 Dado** que existem as contas:
>   - `1`: _Conta A_ | `1.2`: _Conta B_ | `1.2.1`: _Conta C_ | `1.2.5`: _Conta D_
> - **🕒 Quando** o usuário seleciona o pai `1.2`
> - **✔️ Então** o sistema deve sugerir o código `1.2.6`

> **Cenário 2**:
> - **📌 Dado** que existem as contas:
>   - `1`: _Conta A_, `1.2`: _Conta B_ | `1.2.1`: _Conta C_ | `1.2.999`: _Conta D_
> - **🕒 Quando** o usuário seleciona o pai `1.2`
> - **✔️ Então** o sistema deve sugerir o código `1.3`

> **Cenário 3**:
> - **📌 Dado** que existem as contas:
>   - `9.9.999.999.998`: _Conta X_ | `9.9.999.999.999`: _Conta Y_ | `9.10`: _Conta Z_
> - **🕒 Quando** o usuário tenta buscar um código para o pai 9.9.999.999
> - **✔️ Então** o sistema deve sugerir o código 9.11.

## 🏗️ Design de Solução (DDD - Domain Driven Design):

**`Bounded Context`**: Plano de Contas
