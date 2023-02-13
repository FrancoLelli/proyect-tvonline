import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="bg-secondary text-center text-lg-start fixed-bottom">
            <div className="text-center p-3">
                © 2020 Copyright - Programado por <Link state={{color: 'inherit', textDecoration: 'inherit'}} to='https://github.com/FrancoLelli'>@FranLelli</Link>
            </div>
        </footer>
  )
}

export default Footer