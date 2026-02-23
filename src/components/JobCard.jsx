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
            const payload = {
                uuid: candidate.uuid,
                jobId: job.id,
                candidateId: candidate.candidateId,
                repoUrl: repoUrl
            };

            await api.post('/api/candidate/apply-to-job', payload);
            alert('Application submitted successfully!');
            setRepoUrl('');
        } catch (err) {
            console.error(err);
            alert('Failed to submit application: ' + (err.response?.data?.message || err.message));
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
