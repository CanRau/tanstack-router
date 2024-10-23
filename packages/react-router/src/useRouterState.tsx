import { useStore } from '@tanstack/react-store'
import { useRef } from 'react'
import { useRouter } from './useRouter'
import { replaceEqualDeep } from './utils'
import type { AnyRoute } from './route'
import type {
  StructuralSharingOption,
} from './structuralSharing'
import type { AnyRouter, RegisteredRouter, RouterState } from './router'

export type UseRouterStateOptions<
  TRouter extends AnyRouter,
  TSelected,
> = {
  router?: TRouter
  select?: (state: RouterState<AnyRoute>) => TSelected
} & StructuralSharingOption<TRouter, TSelected>

export function useRouterState<
  TRouter extends AnyRouter = RegisteredRouter,
  TSelected = RouterState<TRouter['routeTree']>,
>(opts?: UseRouterStateOptions<TRouter, TSelected>): TSelected {
  const contextRouter = useRouter<TRouter>({
    warn: opts?.router === undefined,
  })
  const router = opts?.router || contextRouter
  const previousResult = useRef<TSelected>()

  return useStore((router).__store, (state) => {
    if (opts?.select) {
      if (opts.structuralSharing ?? router.options.defaultStructuralSharing) {
        const newSlice = replaceEqualDeep(
          previousResult.current,
          opts.select(state),
        )
        previousResult.current = newSlice
        return newSlice
      }
      return opts.select(state)
    }
    return state as TSelected
  })
}
