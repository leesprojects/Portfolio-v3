import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import githubLogo from '../assets/github.png'
import leetcodeLogo from '../assets/leetcode.png'
import linkedinLogo from '../assets/linkedin.png'
import stackoverflowLogo from '../assets/stackoverflow.png'

function LinksFunction() {
  return (
    <div className="links">
      <a href="https://vitejs.dev" target="_blank">
        <img src={viteLogo} className="logo" alt="Vite logo" />
      </a>
      <a href="https://react.dev" target="_blank">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>
      <a href="https://github.com/leesprojects" target="_blank">
        <img src={githubLogo} className="logo github" alt="Github Logo" />
      </a>
      <a href="https://leetcode.com/Zaeroso/" target="_blank">
        <img src={leetcodeLogo} className="logo leetcode" alt="LeetCode Logo" />
      </a>
      <a href="https://www.linkedin.com/in/lee-stevens-dev/" target="_blank">
        <img src={linkedinLogo} className="logo linkedin" alt="LinkedIn Logo" />
      </a>
      <a href="https://stackoverflow.com/users/18739922/lee-stevens" target="_blank">
        <img src={stackoverflowLogo} className="logo stackoverflow" alt="StackOverflow Logo" />
      </a>
    </div>
  )
}

export default LinksFunction;