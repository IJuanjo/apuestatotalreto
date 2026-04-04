# Apuesta Total - Reto Tecnico

Aplicacion web de simulacion de apuestas deportivas construida con Next.js App Router.

Permite explorar partidos del dia, seleccionar apuestas tipo 1X2 (Local, Empate, Visitante), autenticarse con credenciales y revisar historial en el perfil.

## Funcionalidades

- Lista de partidos en /bets
- Seleccion de cuotas y guardado temporal en sessionStorage
- Registro e inicio de sesion con formulario validado por zod + react-hook-form
- Perfil de usuario con resumen e historial de apuestas
- Detalle de apuesta en /bets/[id]
- Toasts de feedback para acciones del usuario
- Guard de rutas desde el cliente:
  - Ruta publica: /bets
  - Rutas privadas: /profile y /bets/[id]
  - Cualquier ruta fuera de ese conjunto redirige a /bets

## Stack Tecnologico

- Next.js 16.2.2
- React 19.2.4
- TypeScript 5
- NextAuth (Credentials + JWT)
- React Query (TanStack Query)
- Tailwind CSS v4
- class-variance-authority
- react-hook-form + zod

## Estructura Principal

- app/(features)/bets: flujo de listado y detalle de apuestas
- app/(features)/profile: vista de perfil e historial
- app/api: endpoints mock para auth, bets y registro de usuario
- app/shared/components: UI reutilizable (header, modal, toast, input, etc.)
- app/shared/providers: providers globales (session, query, auth)
- app/shared/data: datos mock en JSON

## Autenticacion y Rutas

- Auth con NextAuth en app/api/auth/[...nextauth]/route.ts
- Usuarios persistidos en app/shared/data/users.json (password en hash)
- Redireccion inicial de / hacia /bets
- El guard de rutas vive en app/shared/providers/auth-provider/hooks/useRouteGuard.ts

## API Local (Mock)

- GET /api/bet
- GET /api/bet/[id]
- GET /api/bet/me
- POST /api/user/register
- GET/POST /api/auth/[...nextauth]

## Variables de Entorno

Crear un archivo .env.local con:

```env
NEXTAUTH_SECRET=tu_secreto_seguro
```

## Ejecutar en Local

Instalar dependencias:

```bash
pnpm install
```

Iniciar entorno de desarrollo:

```bash
pnpm dev
```

Build de produccion:

```bash
pnpm build
pnpm start
```

## Notas

- Es una simulacion, no hay dinero real.
- La informacion de partidos, apuestas y usuarios se basa en archivos JSON locales.
