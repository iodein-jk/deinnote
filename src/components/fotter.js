import React from "react"
import { Link } from "gatsby"

const fotter = () => {

    return (
        <footer class="text-center pt-50">
            <p><small>© {new Date().getFullYear()}, Built with{` `}<a href="https://iodein.com/">DeinNote</a></small></p>
        </footer>
    )
}

export default fotter
