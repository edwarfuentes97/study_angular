import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface ExampleItem {
  title: string;
  description: string;
  snippet: string;
}

@Component({
  selector: 'app-prompting-examples',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './prompting-examples.html',
  styleUrl: './prompting-examples.css'
})
export class PromptingExamplesComponent {
  readonly examples = signal<ExampleItem[]>([
    {
      title: 'Prompt simple',
      description: 'Un ejemplo claro para resumir un texto y devolver una respuesta breve y útil.',
      snippet: 'User: Resume este texto en 3 puntos.\nOutput: lista breve.',
    },
    {
      title: 'Salida JSON',
      description: 'Pide una estructura exacta para extraer categorías, montos o metadatos.',
      snippet: 'User: Extrae gasto, categoría y monto.\nOutput: JSON con esos campos.',
    },
    {
      title: 'RAG',
      description: 'Usa tus documentos como contexto para que la respuesta sea más precisa y útil.',
      snippet: 'Contexto: documentos del proyecto.\nPregunta: ¿qué decisión tomó el equipo?',
    },
    {
      title: 'Agente simple',
      description: 'Un agente puede pasar por varias etapas: entender, buscar, decidir y responder.',
      snippet: 'Objetivo: completar una tarea en pasos.\nHerramienta: buscarDocumento().',
    },
  ]);
}
