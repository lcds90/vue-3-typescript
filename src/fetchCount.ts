interface FetchCountCallback {
    (count: number): void
}

export default (cb: FetchCountCallback) => {
    cb(5)
} 