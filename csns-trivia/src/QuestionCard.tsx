import './QuestionCard.css'


interface QuestionData {
	id: string;
	text: string;
	choices: string[];
	answerIndex: number;
	difficulty?: 'easy' | 'medium' | 'hard';
	disabled?: boolean;
}

function QuestionCard(props: { question: QuestionData; selectedIndex: number | null; onSelect: (index: number) => void; disabled?: boolean }) {

	const { question, selectedIndex, onSelect, disabled } = props;

	return (
		<>
		<div>
			<h2>{question.text}</h2>
			<div className ="choices-container">
				
			</div>
		</div>
		</>
	)
}

export default QuestionCard