# Apuesta Total - Reto Tecnico

Aplicacion web de simulacion de apuestas deportivas construida con Next.js App Router. Permite explorar partidos del dia, seleccionar apuestas tipo 1X2 y revisar el historial personal despues de autenticarse con Google.

## Funcionalidades

- Lista de partidos disponibles en `/bets`
- Seleccion de cuotas y persistencia temporal en `sessionStorage`
- Detalle de apuesta en `/bets/[id]`
- Perfil de usuario en `/profile` con resumen e historial
- Inicio de sesion con Google usando NextAuth
- Toasts para feedback de acciones y restricciones de acceso
- Guard de rutas desde cliente:
  - Ruta publica: `/bets`
  - Rutas privadas: `/profile` y `/bets/[id]`
  - Cualquier otra ruta redirige a `/bets`

## Stack Tecnologico

- Next.js 16.2.2
- React 19.2.4
- TypeScript 5
- NextAuth con Google Provider y sesiones JWT
- TanStack Query
- Tailwind CSS v4
- ESLint 9

## Estructura Principal

- `app/(features)/bets`: listado de partidos y detalle de apuesta
- `app/(features)/profile`: resumen de cuenta e historial
- `app/api`: endpoints mock de apuestas y autenticacion
- `app/shared/components`: componentes reutilizables de UI
- `app/shared/providers`: providers globales de sesion, auth, query y toasts
- `app/shared/data`: fuentes mock en JSON

## Autenticacion y Navegacion

- La ruta raiz `/` redirige automaticamente a `/bets`
- NextAuth esta configurado en `app/api/auth/[...nextauth]/route.ts`
- El acceso autenticado se realiza con Google (`signIn("google")`)
- El guard de rutas vive en `app/shared/providers/auth-provider/hooks/useRouteGuard.ts`
- Si un usuario no autenticado intenta entrar a una ruta privada, se limpia `sessionStorage`, se muestra un toast y se redirige a `/bets`

## API Local Mock

- `GET /api/bet`: devuelve los partidos del dia desde `app/shared/data/matches-today.json`
- `GET /api/bet/[id]`: devuelve el detalle enriquecido de una apuesta
- `GET /api/bet/me`: devuelve el historial desde `app/shared/data/bets-me.json`
- `GET/POST /api/auth/[...nextauth]`: flujo de autenticacion con NextAuth

## Variables de Entorno

Crear un archivo `.env.local` con valores equivalentes a los usados por la aplicacion:

```env
GOOGLE_CLIENT_ID=tu_google_client_id
GOOGLE_CLIENT_SECRET=tu_google_client_secret
NEXTAUTH_SECRET=tu_secreto_seguro
NEXT_PUBLIC_API_URL=http://localhost:3000
```

## Ejecutar en Local

Instalar dependencias:

```bash
pnpm install
```

Levantar el servidor de desarrollo:

```bash
pnpm dev
```

Generar build de produccion:

```bash
pnpm build
pnpm start
```

Validar lint:

```bash
pnpm lint
```

## Notas

- Es una simulacion; no hay dinero real ni integracion con una casa de apuestas.
- Los datos de partidos e historial se leen desde archivos JSON locales.
- La carpeta `app/api/user/register` existe en la estructura, pero actualmente no expone un handler implementado.
