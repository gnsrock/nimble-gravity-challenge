import { useState, useEffect } from 'react';
import api from '../services/api';

const useChallenge = () => {
    const [candidate, setCandidate] = useState(null);
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const [candidateRes, jobsRes] = await Promise.all([
                    api.get('/api/candidate/get-by-email?email=gabrielcastellaro@gmail.com'),
                    api.get('/api/jobs/get-list')
                ]);
                setCandidate(candidateRes.data);
                setJobs(jobsRes.data);
            } catch (err) {
                setError(err.message || 'Error loading data');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return { candidate, jobs, loading, error };
};

export default useChallenge;
