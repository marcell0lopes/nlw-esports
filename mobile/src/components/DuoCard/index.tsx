import { GameController } from 'phosphor-react-native';
import { View, Text, ColorValue, TouchableOpacity } from 'react-native';
import { THEME } from '../../theme';
import { styles } from './styles';

interface FieldSetProps {
  label: string;
  value: string;
  colorValue?: ColorValue;
}

function InfoFieldset({
  label,
  value,
  colorValue = THEME.COLORS.TEXT,
}: FieldSetProps) {
  return (
    <View style={styles.fieldset}>
      <Text style={styles.label}>{label}</Text>
      <Text numberOfLines={1} style={[styles.value, { color: colorValue }]}>
        {value}
      </Text>
    </View>
  );
}

export interface DuoCardProps {
  id: string;
  hourEnd: string;
  hourStart: string;
  name: string;
  useVoiceChannel: boolean;
  weekDays: string[];
  yearsPlaying: number;
}

interface Props {
  data: DuoCardProps;
  onConnect: () => void;
}

export function DuoCard({ data, onConnect }: Props) {
  return (
    <View style={styles.container}>
      <InfoFieldset label="Nome" value={data.name} />
      <InfoFieldset
        label="Tempo de jogo"
        value={`${data.yearsPlaying} ano(s)`}
      />
      <InfoFieldset
        label="Disponibilidade"
        value={`${data.weekDays.length} dias \u2022 ${data.hourStart} - ${data.hourEnd}`}
      />
      <InfoFieldset
        label="Chamada de Áudio"
        value={data.useVoiceChannel ? 'Sim' : 'Não'}
        colorValue={
          data.useVoiceChannel ? THEME.COLORS.SUCCESS : THEME.COLORS.ALERT
        }
      />

      <TouchableOpacity style={styles.button} onPress={onConnect}>
        <GameController color={THEME.COLORS.TEXT} size={20} />
        <Text style={styles.buttonTitle}>Conectar</Text>
      </TouchableOpacity>
    </View>
  );
}
