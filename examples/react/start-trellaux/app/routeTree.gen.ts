/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as IndexImport } from './routes/index'
import { Route as BoardsBoardIdImport } from './routes/boards.$boardId'

// Create/Update Routes

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const BoardsBoardIdRoute = BoardsBoardIdImport.update({
  id: '/boards/$boardId',
  path: '/boards/$boardId',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/boards/$boardId': {
      id: '/boards/$boardId'
      path: '/boards/$boardId'
      fullPath: '/boards/$boardId'
      preLoaderRoute: typeof BoardsBoardIdImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/boards/$boardId': typeof BoardsBoardIdRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/boards/$boardId': typeof BoardsBoardIdRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/boards/$boardId': typeof BoardsBoardIdRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/boards/$boardId'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/boards/$boardId'
  id: '__root__' | '/' | '/boards/$boardId'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  BoardsBoardIdRoute: typeof BoardsBoardIdRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  BoardsBoardIdRoute: BoardsBoardIdRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/boards/$boardId"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/boards/$boardId": {
      "filePath": "boards.$boardId.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
