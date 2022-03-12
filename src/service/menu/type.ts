

export interface Menu {
    name: string | null
    id: number
    parentId: number
    sort: number
    type: number
    url: string | null
    permission?: string
    children: Array<Menu>
}