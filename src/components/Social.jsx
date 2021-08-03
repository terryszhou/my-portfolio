import resume from '../static/terryzhou-resume.pdf'

export const Social = () => {
    return (
        <div class="social">
            <a href="https://www.linkedin.com/in/terryszhou/" target="_blank" rel="noreferrer">
                <div class="icon fab fa-linkedin"></div>
            </a>
            <a href="https://github.com/terryszhou" target="_blank" rel="noreferrer">
                <div class="icon fab fa-github"></div>
            </a>
            <a href="https://codepen.io/terryszhou" target="_blank" rel="noreferrer">
                <div class="icon fab fa-codepen"></div>
            </a>
            <a href="https://instagram.com/terry.s.zhou" target="_blank" rel="noreferrer">
                <div class="icon fab fa-instagram"></div>
            </a>
            <a href="mailto:terryszhou@gmail.com" target="_blank" rel="noreferrer">
                <div class="icon fas fa-envelope"></div>
            </a>
            <a href={resume} target="_blank" rel="noreferrer">
                <div class="icon far fa-file"></div>
            </a>
        </div>
    )
}