// AULA-01-04
// VARIÁVEIS EM JAVASCRIPT - let, const e var


// let
// - Variavél de escopo de bloco. Só é acessível no bloco no qual for declarada.
// - Ideal para declarar variável cujo valor pode ser reatribuido
// - Não é possivel redeclarar uma varivél no mesmo bloco de escopo
// - Não é obrigatório atribuir um valor a variável no momento da declaração
// - Hoisting/Elevação: A variável é "elevada" ao topo do bloco, mas não é inicializada.
// - Ao acessar a variável antes da declaração, retornará erro (Temporal Dead Zone)

let idade = 45;
// let - tipo da variável a qual permite reatribuição de valores
// idade - nome da variável
// = - sinal de atribuição
// 45 - valor atribuído

// ===========================================================================

// const
// - Variavél de escopo de bloco. Só é acessível no bloco no qual for declarada.
// - Ideal para declarar constante, isso é, variável cujo valor não pode ser reatribuido
// - É obrigatório atribuir um valor a variável, do contrário exibirá erro na inicialização ou sintaxe
// - Obs: Se for um objeto, seu conteúo ainda pode ser alterado

const nome = 'Romulo';
// const - delcaração de consdtante a qual não permite reatribuição de valores
// nome - nome da constante
// = - sinal de atribuição
// 'Romulo' - valor atribuído


// ===========================================================================


// var
// - Não é mais tão utilizada
// - Escopo global
// - Hoisting/Elevação: A variável é "elevada" ao topo do bloco e é inicializada.
// - Ao acessar a variável antes da declaração, não retornará erro (Temporal Dead Zone)

var cargo = 'dev';
// const - delcaração de consdtante a qual não permite reatribuição de valores
// name - nome da constante
// = - sinal de atribuição
// 'Romulo' - valor atribuído


// ===========================================================================

// - Declarar as variáveis usando a convenção camelCase
// - Usar nomes auto declarativos
// - Não utilizar palavras reservadas para nomear variáveis