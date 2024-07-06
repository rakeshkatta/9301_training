import React, {useState, useEffect} from 'react';

const DataComp = () => {
    const [data, setData] = useState([]);

    const fetchData = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        console.log("data", data);
        setData(data);
    } 

    // const searchInput = useRef('searchInput');

    // const handleIdFilter = (searchInput) => {
        
    // }

    useEffect(() => { 
        fetchData();
    }, []);

    return(
        <div>
            <table>
                <thead>
                    <tr>
                        <th>ID </th>
                        <th>Title</th>
                        <th>Body</th>
                    </tr>
                </thead>
                <tbody>
                    { data && data.map((post) =>(
                        <tr>
                            <td>{post.id}</td>
                            <td>{post.title}</td>
                            <td>{post.body}</td>
                        </tr>
                    ))
                    }
                </tbody>
            </table>
        </div>
    )
        
}

export default DataComp;