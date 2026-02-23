import useChallenge from './hooks/useChallenge';
import JobCard from './components/JobCard';
import './styles/App.css';

function App() {
  const { candidate, jobs, loading, error } = useChallenge();

  if (loading) return <div className="status">Loading...</div>;
  if (error) return <div className="status error">Error: {error}</div>;

  return (
    <div className="container">
      <header>
        <h1>Nimble Gravity Challenge</h1>
        {candidate && (
          <div className="candidate-info">
            <p>Welcome, <strong>{candidate.firstName} {candidate.lastName}</strong></p>
          </div>
        )}
      </header>

      <main>
        <h2>Available Jobs</h2>
        <div className="jobs-grid">
          {jobs.map(job => (
            <JobCard key={job.id} job={job} candidate={candidate} />
          ))}
        </div>
      </main>

      <footer>
        <p>&copy; 2026 Nimble Gravity</p>
      </footer>
    </div>
  );
}

export default App;
