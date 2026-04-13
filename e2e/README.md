# Playwright E2E Tests

Esta suite de pruebas E2E cubre exhaustivamente la aplicación Angular Study App usando Playwright.

## Estructura de Tests

### Archivos de Test

- **`navigation.spec.ts`** - Pruebas de navegación general
- **`dashboard.spec.ts`** - Pruebas específicas del dashboard principal
- **`labs-navigation.spec.ts`** - Pruebas de navegación entre laboratorios
- **`playwright-lab.spec.ts`** - Pruebas específicas del laboratorio de Playwright
- **`progress-tracking.spec.ts`** - Pruebas del sistema de seguimiento de progreso
- **`responsive.spec.ts`** - Pruebas de diseño responsivo
- **`labs-content.spec.ts`** - Pruebas de contenido de laboratorios específicos
- **`accessibility-performance.spec.ts`** - Pruebas de accesibilidad y rendimiento
- **`integration.spec.ts`** - Pruebas de integración y flujos completos
- **`advanced-scenarios.spec.ts`** - Escenarios de prueba avanzados y casos edge

### Categorías de Pruebas

#### 🧭 **Navegación**
- Navegación entre páginas principales
- Manejo de rutas inválidas
- Estado de navegación persistente

#### 📊 **Dashboard**
- Visualización de todos los tópicos de estudio
- Indicadores de nivel de prioridad
- Navegación a laboratorios específicos

#### 🧪 **Laboratorios**
- Navegación dentro de cada laboratorio
- Contenido de aprendizaje, ejemplos y ejercicios
- Funcionalidad específica de cada tecnología

#### 📈 **Progreso**
- Seguimiento de progreso general
- Completado de subtópicos
- Persistencia de progreso

#### 📱 **Responsivo**
- Funcionalidad en móvil, tablet y desktop
- Interacciones táctiles
- Diferentes orientaciones

#### ♿ **Accesibilidad**
- Jerarquía de encabezados
- Navegación por teclado
- Contraste de colores
- Etiquetas ARIA

#### ⚡ **Rendimiento**
- Tiempos de carga
- Imágenes rotas
- Manejo de conexiones lentas

#### 🔗 **Integración**
- Flujos de usuario completos
- Persistencia de datos
- Manejo de errores

## Ejecución de Tests

### Todos los tests
```bash
npm run test:e2e
```

### Tests específicos
```bash
# Un archivo específico
npx playwright test navigation.spec.ts

# Una categoría específica
npx playwright test --grep "dashboard"

# Un navegador específico
npx playwright test --project chromium

# Con interfaz visual
npx playwright test --headed
```

### Opciones útiles
```bash
# Ejecutar en modo debug
npx playwright test --debug

# Generar reportes
npx playwright show-report

# Ejecutar tests marcados como slow
npx playwright test --grep-invert "skip"

# Paralelizar tests
npx playwright test --workers 4
```

## Configuración

### Playwright Config (`playwright.config.ts`)
- **Base URL**: `http://localhost:4200`
- **Paralelización**: Habilitada
- **Retries**: 2 en CI, 0 en local
- **Screenshots**: Solo en fallos
- **Videos**: Retenidos en fallos
- **Traces**: En reintentos

### Proyectos de Navegador
- **Chromium**: Desktop Chrome
- **Firefox**: Desktop Firefox
- **WebKit**: Desktop Safari

## CI/CD

Los tests están configurados para ejecutarse en GitHub Actions (`.github/workflows/playwright.yml`):

```yaml
- name: Run Playwright tests
  run: npm run test:e2e
- name: Upload test results
  uses: actions/upload-artifact@v4
  if: always()
  with:
    name: playwright-report
    path: playwright-report/
```

## Mejores Prácticas

### Organización
- Tests agrupados por funcionalidad
- Nombres descriptivos de tests
- Uso de `describe` para agrupar tests relacionados

### Selectores
- Preferir `getByRole()` sobre selectores CSS
- Usar `getByText()` para contenido visible
- Evitar selectores frágiles

### Assertions
- Usar `toBeVisible()` para elementos renderizados
- `toHaveURL()` para navegación
- `toHaveText()` para contenido específico

### Manejo de Estado
- Tests independientes entre sí
- Limpieza de estado entre tests
- Uso de `beforeEach` para setup común

## Debugging

### Modos de Debug
```bash
# Modo debug interactivo
npx playwright test --debug

# Con navegador visible
npx playwright test --headed

# Solo un test específico
npx playwright test --grep "specific test name"
```

### Capturas y Traces
- **Screenshots**: Automáticos en fallos
- **Videos**: En fallos para debugging
- **Traces**: Para análisis detallado de ejecución

## Mantenimiento

### Actualización de Tests
1. Revisar tests después de cambios en UI
2. Actualizar selectores cuando cambie el DOM
3. Agregar nuevos tests para funcionalidades nuevas

### Performance
- Tests paralelos para velocidad
- Reintentos configurables
- Optimización de selectores

## Cobertura

Esta suite cubre:
- ✅ Navegación completa de la aplicación
- ✅ Todos los laboratorios principales
- ✅ Sistema de progreso
- ✅ Diseño responsivo
- ✅ Accesibilidad básica
- ✅ Rendimiento de carga
- ✅ Integración de funcionalidades
- ✅ Casos edge y escenarios avanzados

**Total de tests**: ~80+ pruebas organizadas en 10 archivos