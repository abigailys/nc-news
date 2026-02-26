import { useState, useEffect } from "react";

function useFetch(fetchFunction, dependencies = []) {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function executeFetch() {
            try {
                setIsLoading(true)
                const result = await fetchFunction()
                setData(result);
            }
            catch (error) {
                setError(error.msg || "Something went wrong!");
            } finally {
                setIsLoading(false);
            }
        }

        executeFetch();

    }, dependencies)

    return { data, setData, isLoading, error }
}

export default useFetch;