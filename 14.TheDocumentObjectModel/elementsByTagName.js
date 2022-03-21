<h1>Heading with a <span>span</span> element.</h1>
<p>A paragraph with <span>one</span>, <span>two</span> spans.</p>

<script>
    function byTagName(node, tagName) {
        let nodes = [];
        tagName = tagName.toLowerCase();

        function addMatchingChildNodes(node) {
            node.childNodes.forEach((n) => {
                if (n.nodeName.toLowerCase() == tagName) {
                    nodes.push(n);
                }
                addMatchingChildNodes(n);
            });
        }

        addMatchingChildNodes(node);

        return nodes;
    }

    console.log(byTagName(document.body, "h1").length);
    // → 1
    console.log(byTagName(document.body, "span").length);
    // → 3
    let para = document.querySelector("p");
    console.log(byTagName(para, "span").length);
    // → 2
</script>
