

```javascript
var maxDistance = function (grid) {
    const queue = []
    const n = grid.length
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j]) {
                queue.push([i, j]) // 保存陆地
            }
        }
    }

    // 如果都是还有活着陆地，则返回 -1
    if (queue.length === n * n || !queue.length) return -1
    let steps = -1 // 因为走完这一层的节点，才到第 0 步
    while (queue.length) {
        // 当前这一层的长度的节点都进行扩展后，steps 要加1
        let len = queue.length
        while (len--) {
            const [x, y] = queue.shift()
            const arr = [[x - 1, y], [x + 1, y], [x, y - 1], [x, y + 1]]
            arr.forEach(item => {
                const [x, y] = item
                if (x >= 0 && x < n && y >= 0 && y < n && grid[x][y] === 0) {
                    queue.push([x, y])
                    grid[x][y] = 1
                }
            })
        }
        steps++
    }
    return steps
};
```
