import Link from "next/link";

function Header() {
    return (
        <div className="header">
            <div>
                Web3Workout
            </div>

            <ul>
                <li><Link href="/">Add Iteration</Link></li>
                <li><Link href="/leadership">Leadership</Link></li>
            </ul>
        </div>
    )
}

export default Header
