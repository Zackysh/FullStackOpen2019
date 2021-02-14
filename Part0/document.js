var sendToServer = function (note) {
    var xhttpForPost = new XMLHttpRequest()
    // ...

    xhttpForPost.open('POST', '/new_note_spa', true)
    xhttpForPost.setRequestHeader(
        'Content-type', 'application/json'
    )
    xhttpForPost.send(JSON.stringify(note))
}