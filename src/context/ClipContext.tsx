import { createContext } from 'react';
import type { Dispatch } from 'react';
import { ClipsRequestParams, ClipData } from '../types'

type ClipType = {
    clips?: ClipData[],
    cursor?: string
}

type ClipContextType = {
    filters: Partial<ClipsRequestParams>,
    setFilters: Dispatch<any>,
    clips: ClipType,
    setClips: Dispatch<any>
}

const ClipContext = createContext<ClipContextType>({} as any);

export default ClipContext;