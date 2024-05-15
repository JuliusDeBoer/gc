/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as ProfileNameIndexImport } from './routes/profile/$name/index'
import { Route as ProfileNameSettingsImport } from './routes/profile/$name/settings'

// Create Virtual Routes

const SignUpLazyImport = createFileRoute('/sign-up')()
const LoginLazyImport = createFileRoute('/login')()
const FeedLazyImport = createFileRoute('/feed')()
const IndexLazyImport = createFileRoute('/')()

// Create/Update Routes

const SignUpLazyRoute = SignUpLazyImport.update({
  path: '/sign-up',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/sign-up.lazy').then((d) => d.Route))

const LoginLazyRoute = LoginLazyImport.update({
  path: '/login',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/login.lazy').then((d) => d.Route))

const FeedLazyRoute = FeedLazyImport.update({
  path: '/feed',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/feed.lazy').then((d) => d.Route))

const IndexLazyRoute = IndexLazyImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route))

const ProfileNameIndexRoute = ProfileNameIndexImport.update({
  path: '/profile/$name/',
  getParentRoute: () => rootRoute,
} as any)

const ProfileNameSettingsRoute = ProfileNameSettingsImport.update({
  path: '/profile/$name/settings',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/feed': {
      id: '/feed'
      path: '/feed'
      fullPath: '/feed'
      preLoaderRoute: typeof FeedLazyImport
      parentRoute: typeof rootRoute
    }
    '/login': {
      id: '/login'
      path: '/login'
      fullPath: '/login'
      preLoaderRoute: typeof LoginLazyImport
      parentRoute: typeof rootRoute
    }
    '/sign-up': {
      id: '/sign-up'
      path: '/sign-up'
      fullPath: '/sign-up'
      preLoaderRoute: typeof SignUpLazyImport
      parentRoute: typeof rootRoute
    }
    '/profile/$name/settings': {
      id: '/profile/$name/settings'
      path: '/profile/$name/settings'
      fullPath: '/profile/$name/settings'
      preLoaderRoute: typeof ProfileNameSettingsImport
      parentRoute: typeof rootRoute
    }
    '/profile/$name/': {
      id: '/profile/$name/'
      path: '/profile/$name/'
      fullPath: '/profile/$name/'
      preLoaderRoute: typeof ProfileNameIndexImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({
  IndexLazyRoute,
  FeedLazyRoute,
  LoginLazyRoute,
  SignUpLazyRoute,
  ProfileNameSettingsRoute,
  ProfileNameIndexRoute,
})

/* prettier-ignore-end */
