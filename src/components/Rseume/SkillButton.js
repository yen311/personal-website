import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";

function SkillButton({ types, btnValue, setBtnValue, loading }) {
  return (
    <div className='mx-auto my-4'>
      <ButtonGroup size='sm'>
        {types.map((type, idx) => (
          <ToggleButton
            key={idx}
            id={`radio-${idx}`}
            type='radio'
            variant='outline-secondary'
            value={type.value}
            checked={btnValue === type.value}
            onChange={(e) => setBtnValue(e.currentTarget.value)}
            disabled={loading ? true : false}
          >
            {type.name}
          </ToggleButton>
        ))}
      </ButtonGroup>
    </div>
  );
}

export default SkillButton;
