import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface ConceptItem {
  title: string;
  description: string;
}

@Component({
  selector: 'app-ai-concepts',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './ai-concepts.html',
  styleUrl: './ai-concepts.css'
})
export class AiConceptsComponent {
  readonly concepts = signal<ConceptItem[]>([
    {
      title: 'LLM',
      description: 'Un modelo de lenguaje que entiende texto, responde preguntas y ayuda con tareas de programación.',
    },
    {
      title: 'Prompts',
      description: 'La calidad del resultado depende mucho del contexto, la intención y las restricciones que elijas.',
    },
    {
      title: 'Tokens y contexto',
      description: 'Definen cuánta información puede manejar el modelo y afectan la calidad, costo y latencia.',
    },
    {
      title: 'Structured outputs',
      description: 'Pedir JSON estricto permite integrar IA con aplicaciones reales y flujos de negocio.',
    },
    {
      title: 'Embeddings y RAG',
      description: 'Permiten que el modelo responda usando documentos, archivos o datos propios del proyecto.',
    },
    {
      title: 'Tools y agentes',
      description: 'Los agentes pueden ejecutar acciones, trabajar paso a paso y usar herramientas para completar tareas.',
    },
  ]);
}
