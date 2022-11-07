import styles from "./NewProject.module.css"
import ProjectForm from "../project/ProjectForm"

function NewProject(){
    return (
        <div class={styles.newproject_container}>
            <h1>Criar Projeto</h1>
            <p>Crie se projeto para depois adicionar os serviços</p>
            <ProjectForm />
        </div>
    )
}

export default NewProject