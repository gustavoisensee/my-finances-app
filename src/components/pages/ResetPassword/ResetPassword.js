import React, { PureComponent } from 'react';
import { View, Text, TextInput } from 'react-native';
import Button from '../../atoms/Button';
import { isInputRequired } from '../../../helpers/validation';
import { EMAIL } from '../../../constants/fieldNames';
import { ERROR, SUCCESS } from '../../../constants/status';
import style from '../../../assets/style';

class ResetPassword extends PureComponent {
  render() {
    const {
      errors,
      handleBlur,
      handleChange,
      handleSubmit,
      isSubmitting,
      navigation: { goBack },
      values,
      status
    } = this.props;

    return (
      <View style={[style.container, style.content]}>
        <Text style={style.label}>Email</Text>
        <TextInput
          style={isInputRequired(errors.email)}
          onChangeText={handleChange(EMAIL)}
          onBlur={handleBlur(EMAIL)}
          value={values.email}
        />
        <Button
          onPress={handleSubmit}
          text='Request reset password'
          loading={isSubmitting}
        />
        <Button
          onPress={() => goBack()}
          text='Back'
          isPrimary={false}
        />
        {status === ERROR &&
          <Text style={style.labelError}>
            {errors.api}
          </Text>}
        {status === SUCCESS &&
          <Text style={style.labelSuccess}>
            An email has been sent to you account to reset your password!
          </Text>}
      </View>
    )
  }
}

export default ResetPassword;

