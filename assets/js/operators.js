// variabler du skal bruge i din kode...
const A = 10;
const B = 30;
const C = '30';
const D = 10;
const E = 40;

// Opgave 1: skriv et expression der viser true når A er lig med B eller A er lig med D.
if (A === D || A === B) {
    console.log('statement true!');
}

// Opgave 2: skriv en If then statement der bliver TRUE når A er større end B og A er mindre end E.
if (A > B && A < E) {
    console.log('A er større end B og mindre end E');
}

// Opgave 3: Skriv en If then statement med && og || der kun er sand når alle expressions er sande.
if ((A === D || B == C) && A < E && B < E) {
    console.log('Alle betingelser er opfyldt');
}

// Opgave 4: Skriv en If then statement der kan finde ud af om F er "undefined" eller har en værdi, ved at bruge !.
let F; // F er undefined
if (!F) {
    console.log('F er undefined eller falsy');
} else {
    console.log('F har en værdi');
}
