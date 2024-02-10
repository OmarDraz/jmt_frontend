import React, {useState} from 'react'
import AddIcon from '../components/AddIcon'
import Modal from '../components/Modal'
function Sessions() {
  const [addModal, setAddModal] = useState(false);
  const [patients, setPatients] = useState([]);
  const [formData, setFormData] = useState({
    patient_user_id: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const response = await axiosInstance.get(`http://localhost:3000/patients`);
        setPatients(response.data);
      } catch (error) {
        console.error('Error fetching patients:', error);
      }
    };

    const fetchGames = async () => {
      try {
        const response = await axiosInstance.get(`http://localhost:3000/games`);
        setPatients(response.data);
      } catch (error) {
        console.error('Error fetching games:', error);
      }
    };

    fetchPatients();
    fetchGames();
  })


  return (
    <div className='jmt-sessions d-flex align-items-center justify-content-center flex-column col-lg-11 col-md-8 col-sm-11'>
        <h2>Upcoming Sessions</h2>
        <Modal toggle={addModal} setToggle={setAddModal}>
            <div className='d-flex align-items-center justify-content-center'>
                <h2 className='fw-bold'>Add Session</h2>
                <div className='jmt-inputGroup'>
                  <label className='fw-bold' htmlFor="patient_user_id">Select Patient</label>
                  <select
                    id="patient_user_id"
                    className="input"
                    name="patient_user_id"
                    value={formData.patient_user_id}
                    onChange={handleChange}
                  >
                    <option value="" disabled>Patient</option>
                    {
                      patients.map((p, index) => (
                        <option key={index} value={p.patient_id}>{p.first_name + ' ' + p.last_name}</option>
                      ))
                    }
                  </select>
                </div>

                <div className='jmt-inputGroup'>
                  <label className='fw-bold' htmlFor="patient_user_id">Select Game</label>
                  <select
                    id="game"
                    className="input"
                    name="game_id"
                    value={formData.game_id}
                    onChange={handleChange}
                  >
                    <option value="" disabled>Patient</option>
                    {
                      games.map((p, index) => (
                        <option key={index} value={p.id}>{p.name}</option>
                      ))
                    }
                  </select>
                </div>

                <div style={{ gap: 20 }} className='w-100 d-flex align-items-center justify-content-between'>
                    <div className='jmt-inputGroup'>
                    <label className='fw-bold' htmlFor="start_angle">Start Angle</label>
                    <input
                        type="text"
                        id="start_angle"
                        className="input"
                        name="start_angle"
                        autoComplete="off"
                        value={formData.start_angle}
                        required
                        placeholder='eg: 60'
                        onChange={handleChange}
                    />
                    </div>

                    <div className='jmt-inputGroup'>
                    <label className='fw-bold' htmlFor="email">Desired Angle</label>
                    <input
                        type="text"
                        id="desired_angle"
                        className="input"
                        name="desired_angle"
                        autoComplete="off"
                        value={formData.desired_angle}
                        required
                        placeholder='eg: Doe'
                        onChange={handleChange}
                    />
                    </div>
                </div>
            </div>
        </Modal>
        <AddIcon onClick={() => setAddModal(true)} />
    </div>
  )
}

export default Sessions