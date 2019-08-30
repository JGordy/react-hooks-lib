import { useEffect } from 'react'

const useDocumentTitle = (title) => {
    useEffect(() => {
        // Check that the window and document are defined
        if (typeof window !== 'undefined' && document) {
            // Update the document title using the browser API
            document.title = title;
        }
    })
}

export default useDocumentTitle;