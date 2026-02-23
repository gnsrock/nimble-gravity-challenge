import { useState } from 'react';
import api from '../services/api';

const JobCard = ({ job, candidate }) => {
    const [repoUrl, setRepoUrl] = useState('');
    const [submitting, setSubmitting] = useState(false);

    const handleApply = async (e) => {
        e.preventDefault();
        if (!repoUrl) {
            alert('Please enter a repository URL');
            return;
        }
        setSubmitting(true);
        try {
            console.log('DATOS DEL CANDIDATO:', candidate);

            const payload = {
                // El servidor pide 'applicationId', pero el valor que 
                // identifica tu proceso es el string largo (uuid).
                applicationId: String(candidate.uuid),

                // El ID del trabajo siempre como String.
                jobId: String(job.id),

                // El ID del candidato como Número.
                candidateId: Number(candidate.candidateId),

                // La URL sin espacios.
                repoUrl: repoUrl.trim()
            };

            if (!payload.applicationId || !payload.candidateId) {
                console.error('Faltan datos críticos:', payload);
            }

            console.log('Enviando este payload final:', payload);

            await api.post('/api/candidate/apply-to-job', payload, {
                headers: { 'Content-Type': 'application/json' }
            });
            alert('Application submitted successfully!');
            setRepoUrl('');
        } catch (err) {
            console.error(err);
            console.log('Cuerpo del error:', err.response?.data);
            const apiErrorMessage = err.response?.data?.error || err.response?.data?.message || err.message;
            alert('Failed to submit application: ' + apiErrorMessage);
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="job-card">
            <h3>{job.title}</h3>
            <form onSubmit={handleApply}>
                <div className="input-group">
                    <label htmlFor={`repo-${job.id}`}>GitHub Repo URL:</label>
                    <input
                        id={`repo-${job.id}`}
                        type="text"
                        value={repoUrl}
                        onChange={(e) => setRepoUrl(e.target.value)}
                        placeholder="https://github.com/..."
                        disabled={submitting}
                    />
                </div>
                <button type="submit" disabled={submitting}>
                    {submitting ? 'Submitting...' : 'Submit'}
                </button>
            </form>
        </div>
    );
};

export default JobCard;
