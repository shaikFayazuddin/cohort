let globalId = 0
        function markAsDone(todoId){
            const parent = document.getElementById(todoId)
            parent.children[2].innerHTML = "Done"
        }
        function createChild(title,description,id){
            const child = document.createElement("div")

            const firstGrandChild = document.createElement("div")
            const secondGrandChild = document.createElement("div")
            const thirdGrandChild = document.createElement("button")

            firstGrandChild.innerHTML = title
            secondGrandChild.innerHTML = description
            thirdGrandChild.innerHTML = "Mark as Done"
            thirdGrandChild.setAttribute("onclick", `markAsDone(${id})`)

            child.appendChild(firstGrandChild)
            child.appendChild(secondGrandChild)
            child.appendChild(thirdGrandChild)
            child.setAttribute("id", id)

            return child
        }

        function addTodo(){
            const title = document.getElementById("title").value
            const description = document.getElementById("description").value
            // const originalHtml = document.getElementById("container").innerHTML
            // document.getElementById("container").innerHTML = originalHtml + ` 
            // <div>
            // <br>
            // <div>${title}</div>
            // <div>${description}</div>
            // <button>Mark as Done</button> <br>
            // </div> `
            const parent = document.getElementById("container")
            parent.appendChild(createChild(title,description,globalId++))

        }