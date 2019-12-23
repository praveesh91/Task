import React from 'react'
import styles from './mystyle.module.css'

function ModuleStyle() {
    return (
        <div>
            <h1 className={styles.success}>This is using module styling</h1>
        </div>
    )
}
export default ModuleStyle
