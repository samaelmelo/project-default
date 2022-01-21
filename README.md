Quando se utiliza o memo no react???

- quando você tem um componente que está sendo renderizado desnecessariamente sem ele ao menos possuir um estado.
ex: quando um componente filho não possuir um estado, mas devido o seu pai possuir ele acaba sendo renderizado diversar vezes.


- então, no caso quem está sendo renderizado desnecessariamente utiliza o memo do react para que ele não renderize diversas vezes.

- Pure Functional Components - se eu passar as mesmas propriedades para este componente e o retorno for o mesmo posso usar o memo.
ex: 

- Renders too often - quando um componente está sendo renderizado muitas vezes.

- Re-rejders with same props - quando um componente renderiza varias vezes e sempre com as mesmas propriedas

- Medium to big size - não usar em componentes pequenos, somemnte em medios para grandes.
