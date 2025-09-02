import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './01 - datos/counter.ts'
import { setupVariables } from './01 - datos/tipos.ts'
import { setupArrays } from './01 - datos/arrays.ts'
import { setupEnums } from './01 - datos/enum.ts'
import { setupAny } from './01 - datos/any.ts'
import { setupCondicionales } from './02 - estructuras/condicionales.ts'
import { setupBucles } from './02 - estructuras/bucles.ts'
import { setupTryCatch } from './02 - estructuras/try-catch.ts'
import { setupFunction } from './03 - funciones/funciones.ts'
import { setupClases } from './04 - clases/clases.ts'
import { setupEjercicioClases } from './04 - clases/main_Class_POO.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
     <div class="card"> 
      <p id="variables" class="read-the-docs"></p>
    </div>
    <div class="card"> 
      <p id="arrays" class="read-the-docs"></p>
    </div>
     <div class="card"> 
      <p id="enum" class="read-the-docs"></p>
    </div>
     <div class="card"> 
      <p id="any" class="read-the-docs"></p>
    </div>
     <div class="card"> 
      <p id="condicionales" class="read-the-docs"></p>
    </div>
    <div class="card"> 
      <p id="bucles" class="read-the-docs"></p>
    </div>
     <div class="card"> 
      <p id="try-catch" class="read-the-docs"></p>
    </div>
    <div class="card"> 
      <p id="funciones" class="read-the-docs"></p>
    </div>
     <div class="card"> 
      <p id="clases" class="read-the-docs"></p>
    </div>
    <p></p>
    <h2>Ejercicio clases</h2>
    <div class="card"> 
      <p id="ejercicio-clases" class="read-the-docs"></p>
    </div>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
setupArrays(document.querySelector<HTMLParagraphElement>('#arrays')!)
setupEnums(document.querySelector<HTMLParagraphElement>('#enum')!) 
setupAny(document.querySelector<HTMLParagraphElement>('#any')!) 
setupVariables(document.querySelector<HTMLParagraphElement>('#variables')!)
setupCondicionales(document.querySelector<HTMLParagraphElement>('#condicionales')!)
setupBucles(document.querySelector<HTMLParagraphElement>('#bucles')!)
setupTryCatch(document.querySelector<HTMLParagraphElement>('#try-catch')!)
setupFunction(document.querySelector<HTMLParagraphElement>('#funciones')!)
setupClases(document.querySelector<HTMLParagraphElement>('#clases')!)
setupEjercicioClases(document.querySelector<HTMLParagraphElement>('#ejercicio-clases')!)
